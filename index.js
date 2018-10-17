/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */
var readlineSync = require('readline-sync');
var fs = require('fs');
var danhBa = [];
function loadData(){
  var data = fs.readFileSync('./data.json',{encoding:'utf8'});
  danhBa = JSON.parse(data);
}
function showMenu(){
  console.log('1. Nhập dữ liệu');
  console.log('2. Sửa dữ liệu');
  console.log('3. Xóa');
  console.log('4. Tìm kiếm');
  console.log('5. Lưu & Thoát');
  var option = readlineSync.question('>');
  switch(option){
    case '1':
    nhapDuLieu();
    showMenu();
    break;
     case '2':
    suaDuLieu();
    showMenu();
    break;
     case '3':
    xoa();
    showMenu();
    break;
     case '4':
    timKiem();
    showMenu();
    break;
     case '5':
    luu();
    break;
  };
};
function nhapDuLieu(){
  var name = readlineSync.question('Name:');
  var phone = readlineSync.question('Phone:');
  var danhBaNew = {
    name : name,
    phone : parseInt(phone)
  }
  danhBa.push(danhBaNew);
};
function luu(){
  var dataString = JSON.stringify(danhBa);
  fs.writeFileSync('./data.json', dataString);
  console.log('Dự liệu đã được lưu !');
};
function xoa(){
  var info = readlineSync.question('Nhap vao ten:');
  for(var y of danhBa){
    if( y.name === info){
       console.log('Số điện thoại :', y.phone);
       break;
    }
    
  }
    return danhBa.splice(danhBa.indexOf(y), 1);
};
function suaDuLieu(){
    var info = readlineSync.question('Nhập vào tên:');

  for(var y of danhBa){
    if( y.name === info){
       console.log('Số điện thoại :', y.phone);
       break;
    }
  }
  var newP = readlineSync.question('Nhập vào số điện thoại mới:');
  var danhBaS = {
    name:info,
    phone:newP
  }
   return danhBa.splice(danhBa.indexOf(y), 1, danhBaS);
};
function timKiem(){
   var info = readlineSync.question('Nhap vao ten:');
  for(var x of danhBa){
    if(x.name === info){
      console.log('Số điện thoại :',x.phone);
    }
  }
  timKiem();
}
function main(){
  loadData();
  showMenu();
};
main();