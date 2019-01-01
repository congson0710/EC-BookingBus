import React, { Component } from 'react';

class Rule extends Component {
  render() {
    return (
      <div>
        <h3 className="text-center">Chính sách đặt/hủy vé</h3>
        <p>*Đây là chính sách riêng của website khi khách hàng muốn thực hiện đổi trả hoặc hoàn tiền vé.</p>
        <p>*Chính sách đổi trả/hoàn tiền của từng hãng xe có thể khác nhau và khác so với chính sách của website được liệt kê dưới đây</p>
        <p>Quy định về chính sách trả/hủy vé, hủy chuyến, lỡ chuyến và các dịch vụ trên xe  (chỉ áp dụng cho các Vé Có Hiệu Lực)</p>
        <p><b>1. Người mua chủ động trả/hủy vé</b></p>
        <p>Sau khi hoàn tất việc thanh toán tiền vé, vé đặt của bạn được xác nhận là Vé Có Hiệu Lực, nhưng bạn vẫn có thể hủy bỏ việc đặt vé đó.</p>
        <p>Việc hủy vé (trừ trường hợp vé lễ tết, khách đoàn), người mua có thể mất một khoản phí hủy vé (tính theo tỷ lệ % giá vé gốc, tức giá vé chưa có khuyến mại, giảm giá) tùy thuộc vào Thời Gian Hủy Vé như sau:</p>
        <ul>
          <li><p>Trước 24 Giờ Làm Việc trước Thời Gian Khởi Hành của vé: Không mất phí</p></li>
          <li><p>Trước 12 Giờ Làm Việc trước Thời Gian Khởi Hành của vé: 50%</p></li>
          <li><p>Sau 12 Giờ Làm Việc trước Thời Gian Khởi Hành của vé: 100%</p></li>
        </ul>
        <p>Trường hợp người mua huỷ các vé khách đoàn (số lượng vé hủy lớn hơn hoặc bằng 5 người) và vé khởi hành trong dịp lễ, tết (bao gồm tối thiểu cả 05 ngày trước và sau các dịp lễ, tết đó) tiền phí huỷ vé sẽ hoàn toàn do chúng tôi quyết định. Khi đặt vé khách đoàn hoặc vé khởi hành vào các dịp lễ, tết tại  người mua đã đồng ý và chấp thuận theo mọi quyết định của chúng tôi.</p>
        <p>Phương thức hoàn lại tiền cho người mua do hai bên thỏa thuận trong mỗi giao dịch. Các phí chi phí giao dịch (ngân hàng, giao vé…) người mua sẽ chịu trong trường hợp người mua chủ động hủy vé.</p>
        <p><b>2. Hủy vé do thông tin sai lệch trên website</b></p>
        <p>Trường hợp sản phẩm đã hết hàng hoặc giá sản phẩm không hiển thị chính xác trên website , tùy theo từng trường hợp chúng tôi sẽ liên hệ để điều chỉnh hoặc thông báo hủy đơn hàng đó của người mua. Chúng tôi cũng có quyền từ chối hoặc hủy bỏ bất kỳ đơn hàng nào dù đơn hàng đó đã hay chưa được xác nhận hoặc đã thanh toán. Trường hợp đơn hàng đã được thanh toán và xác nhận thành công, người mua sẽ được hoàn lại 100% tiền vé.</p>
        <p><b>3. Nhà xe hủy chuyến</b></p>
        <p>Trường hợp hãng xe hủy bỏ một chuyến xe hay dịch vụ, chúng tôi sẽ cố gắng thông báo cho Người mua sớm nhất và nỗ lực hỗ trợ Người mua tìm dịch vụ thay thế tương đồng nhất. Nếu Người mua không đồng ý sử dụng dịch vụ thay thế,  sẽ hoàn lại 100% tiền vé cho Người mua.</p>
        <p><b>4. Người mua lỡ chuyến</b></p>
        <p>Người mua phải có mặt trước Thời Gian Xuất Phát tối thiểu 30 phút để sắp xếp hành lý và chỗ ngồi. chúng tôi và đối tác vận tải sẽ không chịu trách nhiệm nếu Người mua không thực hiện yêu cầu này.</p>
        <p>Thời gian đón khách giữa chặng chỉ có tính chất tham khảo vì xe chạy đường dài có thể sẽ sai lệch nhiều về thời gian. Vì vậy, Người mua đặt vé xe giữa chặng cần liên hệ trước với chúng tôi hoặc hãng xe để có thêm thông tin chính xác giờ lên xe. Nếu Người mua vé giữa chặng không liên lạc trước, hoặc hãng xe không liên lạc được để đón thì chúng tôi và đối tác vận tải sẽ không chịu trách nhiệm khi Người mua lỡ chuyến.</p>
        <p>Nếu nguyên nhân lỡ chuyến do chuyến xe chạy trước Thời Gian Khởi Hành hoặc hãng xe đã liên lạc với khách để đón giữa chặng mà không đón khách,  sẽ hoàn 100% tiền vé đã thanh toán cho Người mua.</p>
        <p><b>5. Quy định về ghế ngồi, giường nằm và các tiện ích khác trên xe</b></p>
        <p>Nếu vé chưa bị hủy trước Thời Gian Khởi Hành, chúng tôi có nghĩa vụ đảm bảo đủ số lượng giường trống (ghế trống) trên xe tương ứng số Vé Có Hiệu Lực Người mua đã đặt. Trường hợp, xe không đủ số lượng giường trống (ghế trống) tương ứng số Vé Có Hiệu Lực và Người mua từ chối sử dụng dịch vụ, chúng tôi sẽ hoàn lại 150% tiền vé đã thanh toán của Người mua.</p>
        <p>Nếu Người mua đặt vé có yêu cầu thêm về vị trí giường nằm (ghế ngồi) mong muốn, chúng tôi sẽ cố gắng (nhưng không bắt buộc) cùng đối tác vận tải đáp ứng yêu cầu của Người mua.</p>
        <p>Các tiện ích như Wifi, ổ cắm điện, nhà vệ sinh hoặc bất kỳ dịch vụ khác trên xe được đề cập trên website là dịch vụ đại diện, phổ biến nhất của hãng xe. Thông tin này giúp Người mua có cái nhìn tổng quát trước khi quyết định đặt vé. Tuy nhiên, chúng tôi không có trách nhiệm đảm bảo 100% các xe đều đáp ứng yêu cầu này, vì một hãng xe có thể có rất nhiều xe được trang bị khác nhau theo từng thời kì. Nếu người mua có thắc mắc, khiếu nại do thiếu xót các tiện tích này cũng như các thiếu xót về chất lượng xe và chất lượng phục vụ, Người mua có thể ý kiến trực tiếp với hãng xe hoặc gửi ý kiến đánh giá về uy tín hãng xe trên website .</p>
      </div>
    );
  }
}

export default Rule;