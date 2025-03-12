const images = [
    {
        src: "images/le_nguyen_thien_huong.jpg",
        info: "Bạn Lê Nguyễn Thiên Hương - cô gái mang vẻ đẹp tri thức cùng với phong thái tự tin khiến bất cứ ai biết đến cô cũng đều cảm thấy ấn tượng, là niềm tự hào của thầy cô khi đã mang về những thành tích xuất sắc như luôn đứng đầu khối trong các kì thi, đạt giải nhất trong cuộc thi hsg hóa của tỉnh Tiền Giang, đặc biệt cô còn tham gia cuộc thi đường lên đỉnh vinh quang đại diện cho trường THPT Chợ Gạo. Với thành tích vượt trội, cô luôn là hình mẫu lý tưởng mà các học sinh hướng tới."
    },
    {
        src: "images/tran_anh_khoa.jpg",
        info: "Bạn Trần Anh Khoa – chàng trai siêu ngầu vừa xuất sắc giành giải Nhất cấp tỉnh! Với trí tuệ sắc bén và sự nỗ lực không ngừng, anh đã vượt qua nhiều đối thủ để khẳng định bản thân. Thành tích này không chỉ là niềm tự hào cá nhân mà còn truyền cảm hứng mạnh mẽ cho mọi người xung quanh. Chúc mừng nhà vô địch!. "
    },
    {
        src: "images/tran_ngo_khanh_duy.jpg",
        info: "Bạn Trần Ngô Khánh Duy - luôn là một trong những học sinh xuất sắc của trường khi luôn thi đậu các cuộc thi hsg lí của tỉnh, là một trong những học sinh có học lực mạnh nhất lớp. "
    },
    {
        src: "images/an_thuyen.jpg",
        info: "Bạn Lê Phạm  An Thuyên - cô nữ sinh với nụ cười rạng rỡ và mái tóc tết duyên dáng, đã khiến thầy cô và bạn bè tự hào khi xuất sắc giành giải Nhì học sinh giỏi tỉnh môn Tiếng Anh. Vốn đam mê ngôn ngữ từ sớm, cô luôn nỗ lực rèn luyện qua từng trang sách, những buổi trao đổi cùng thầy cô nước ngoài và sự kiên trì tự học. Những đêm miệt mài luyện nghe, nói và viết đã hun đúc nên khả năng tiếng Anh vững vàng, giúp Thuyên tỏa sáng tại kỳ thi. Không chỉ có thành tích ấn tượng, cô gái trẻ còn được yêu mến bởi sự nhiệt tình, sẵn sàng hỗ trợ bạn bè, tạo nên hình ảnh một học sinh vừa giỏi giang vừa giàu lòng nhân ái. "
    },
    {
        src: "images/bui_duy_bao.jpg",
        info: "Bạn Bùi Duy Bảo - nổi bậc với vẻ ngoài điển trai và sự hài hước, tuy không quá nổi bậc như các bạn nhưng là tấm gương cho sự kiên trì, không ngại thử thách."
    },
];

let currentIndex = 0;
const studentImage = document.getElementById("student-image");
const studentInfo = document.getElementById("student-info");

function updateStudent() {
    studentImage.src = images[currentIndex].src;
    studentInfo.innerText = images[currentIndex].info;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateStudent();
}

function showContent(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.remove('hidden');
    // Tùy chọn: Cuộn trang đến phần này
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}