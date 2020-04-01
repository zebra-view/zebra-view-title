self.importScripts('https://cdn.bootcss.com/spark-md5/3.0.0/spark-md5.js');
console.log('inin')
self.onmessage = async (event) => {
    var { partList } = event.data;
    console.log(partList)
    const spark = new self.SparkMD5.ArrayBuffer();
    var percent = 0;
    var perSize = 100 / partList.length;
    var buffers = await Promise.all(partList.map(({ chunk }) => new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsArrayBuffer(chunk);
        reader.onload = (event) => {
            percent += perSize;
            self.postMessage({ percent: Number(percent.toFixed(2)) });
            resolve(event.target.result);
        }
    })));
    buffers.forEach(buffer => spark.append(buffer));
    self.postMessage({ percent: 100, hash: spark.end() });
    self.close();
}
