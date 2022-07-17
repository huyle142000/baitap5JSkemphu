


//BT1:Quản lí tuyển sinh bằng cách tạo hàm
/**
 * input
 * Điểm chuẩn
 * Chọn khu vực 
 * Chọn đối tượng
 * Điểm các môn 1,2,3
 * Xử lý:
 * Tạo biến lưu các giá trị nhập
 * Tạo hàm có tham số là điểm các môn,điểm chuẩn, khu vực và đối tượng 
 * Trong đó dùng các vòng lặp if else để xét giá trị khu vực và đối tượng
 * Nếu các môn có 1 môn bằng 0 điểm thì cho rớt
 * Tạo biến hứng giá trị return là output
 * output:
 * In ra kq đạt hay ko đạt
 * 
 */
var shape = document.getElementById('shape');
shape.addEventListener('click', () => {
    //input
    var admissionScore = Number(document.getElementById('admissionScore').value);
    var area = Number(document.getElementById('area').value);

    var object = Number(document.getElementById('object').value);
    var subject1 = Number(document.getElementById('subject1').value);

    var subject2 = Number(document.getElementById('subject2').value);
    var subject3 = Number(document.getElementById('subject3').value);
    var resultshape = document.getElementById('resultshape');


    //output
    var output = '';
    //progressv

    function result(a, b, c, d, e) {
        var sum = a + b + c + d + e;

        if (a === 0 || b === 0 || c === 0) {
            sum = 0
        }
        return sum
    }
    sum = result(subject1, subject2, subject3, area, object)
    if (sum === 0) {
        return resultshape.innerHTML = 'Bạn đã có 1 hoặc nhiều môn 0 điểm bạn đã : Rớt '
    } else if (sum >= admissionScore) {
        output = 'Đậu'
    } else if (sum < admissionScore) {
        output = 'Rớt'
    }

    resultshape.innerHTML = 'Tổng số điểm bạn đạt được là: ' + sum + ', ' + 'Bạn đã ' + output;


});

/**
 * BT2:Tính tiền điện
 * input
 * Số kWh
 * Giá kWh theo từng mốc
 * Xử lý:
 * tạo biến lưu các giá trị
 * tạo hàm tham số là giá kwH
 * Trong hàm xử dụng if else để xác định mốc xử dụng
 * return kq 
 * tạo biến output hứng giá trị return kq
 * Output:
 * Số tiền phải trả 
 */
var resultMoney = document.getElementById('resultMoney');
resultMoney.addEventListener('click', () => {
    //input
    var kwhs = Number(document.getElementById('kwhs').value);
    //output
    var output = 0;
    //progress
    function billElec(a) {
        var output = 0;
        if (a <= 50) {
            output = a * 500
        } else if (a <= 100) {
            output = a * 650
        } else if (a <= 200) {
            output = a * 850
        } else if (a <= 350) {
            output = a * 1100
        } else if (a > 350) {
            output = a * 1300
        }
        return output;
    }
    output = billElec(kwhs)
    var resultBill = document.getElementById("resultBill");
    resultBill.innerHTML = 'Tiền điện phải trả : ' + output.toLocaleString() + ' VNĐ';
})

/**
 * Bt3:
 * input
 * Thu nhập
 * Số người phụ thuộc
 * Xử lý:
 * tạo biến lưu các giá trị
 * tạo hàm tham số là thu nhập và số người phụ thuộc
 * Dựa vào if else để xác định thuế 
 * Công thức Tiền thuế thu nhập: -4tr-người phụ thuộc*1.6
 * output:
 * Xuất tiền thuế
 */

var resultIncome = document.getElementById('resultIncome');
resultIncome.addEventListener('click', () => {
    //input
    var income = Number(document.getElementById('income').value);
    var peoples = Number(document.getElementById('peoples').value);

    //output

    var output = 0;
    //progress
 
    output = billTax(income, peoples)
    var resultincomes = document.getElementById("resultincomes");
    resultincomes.innerHTML = 'Tiền thuế phải trả : ' + output.toLocaleString() + " VNĐ";
})
function billTax(a, b) {
    var output = 0;
    var calc=0;
    if (a <= 60000000) {
        calc=a - (4e+6) - (b * 1.6e+6);
        output =calc * 0.05;
    } else if (a <= 120000000) {
        calc=a - (4e+6) - (b * 1.6e+6);
        output =calc * 0.1;

    } else if (a <= 210000000) {
        calc=a - (4e+6) - (b * 1.6e+6);
        output =calc *  0.15;

    } else if (a <= 384000000) {
        calc=a - (4e+6) - (b * 1.6e+6);
        output =calc *  0.2;


    } else if (a <= 624000000) {
        calc=a - (4e+6) - (b * 1.6e+6);
        output =calc *  0.25;

    } else if (a <= 960000000) {
        calc=a - (4e+6) - (b * 1.6e+6);
        output =calc *  0.3;
        

    } else if (a > 960000000) {
        calc=a - (4e+6) - (b * 1.6e+6);
        output =calc *  0.35;

    }
    if (a === 0) {
        return output = '<div class="text-danger">Bạn chưa nhập đủ dữ liệu</div>';

    } else if (output < 0) {
        output = '<div class="text-danger">Số bạn nhập ko hợp lệ vì ra kết qủa âm</div>';
        return output;
    }
    return output;
}

/**
 * Bt4:Tính tiền cáp
 * input:
 * Loại khách hàng
 * Mã khách hàng
 * Số kết nối 
 * Số kênh cao cấp
 * Xử lý:
 * tạo biến lưu các giá trị
 * Onchange vào biến loại khách hàng để ẩn hiện ô input kết nối
 * Tạo hàm khi click vào btn có tham số là value của loại khách hàng và số kênh cao cấp, số kết nối
 * Sử dụng if else để chia trường hợp công thức riêng cho khách hàng và doanh nghiệp
 * tạo biến lưu hàm return
 * Output:
 * Cho kq số tiền cáp là bao nhiêu
 */
var clients = document.getElementById('clients');
clients.onchange = function () {
    var clientss = Number(document.getElementById('clients').value);
    var channel = document.getElementById('channel');
    if (clientss === 1) {
        channel.classList.remove('show')
    } else if (clientss === 2) {
        channel.classList.add('show')

    }
}
var channelBtn = document.getElementById('channelBtn');
channelBtn.onclick = function () {
    //input
    var codeClient = document.getElementById('codeclient').value;
    var premiumChannel = Number(document.getElementById('premiumChannel').value);
    var channel = Number(document.getElementById('channel').value);
    var clients = Number(document.getElementById('clients').value);
    var resultchannel = document.getElementById('resultchannel');
    //output
    var output = 0;

    //progress
    output = channelBill(clients, premiumChannel, channel);
    if(clients==0){
        return alert("Please select type of clients");
    }
    
    resultchannel.innerHTML = `Mã Khách hàng : ${codeClient}, Tiền cáp là : $${output}`
    
}
function channelBill(a, b, c) {
    var billFeebasic = 0;
    var billFeeservice = 0;
    var billUsePremiumChannel = 0;
    var output = 0;
    if (a === 1) {
        billFeebasic = 4.5;
        billFeeservice = 20.5;
        billUsePremiumChannel = 7.5;
        output = billFeebasic + billFeeservice + billUsePremiumChannel * b
    } else if (a === 2) {
        billFeebasic = 15;
        billFeeservice = 75;
        billUsePremiumChannel = 50;
        if (c > 10) {
            billFeeservice = billFeeservice + (c - 10) * 5;
        }
        output = billFeebasic + billFeeservice + billUsePremiumChannel * b
    }
    return output;
}