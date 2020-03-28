import QRCode from "qrcode";

var segs = [
  { data: "ABCDEFG", mode: "alphanumeric" },
  { data: "0123456", mode: "numeric" }
];

export const generate = () => {
  QRCode.toDataURL(segs, function(err, url) {
    console.log(url);
    if (err) throw err;
    var img = document.getElementById("image");
    img.src = url;
  });
};

export const generateToCanvas = () => {
  QRCode.toCanvas("text", { errorCorrectionLevel: "H" }, function(err, canvas) {
    console.log("canvas", canvas);
    if (err) throw err;

    var container = document.getElementById("container");
    container.appendChild(canvas);
  });
  // QRCode.toCanvas(segs, function(err, canvas) {
  //   // console.log(url);
  //   if (err) throw err;

  //   var container = document.getElementById("container");
  //   container.appendChild(canvas);
  // });
};
