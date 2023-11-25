import { useHistory } from "react-router-dom";

const NotFound = () => {
    let history = useHistory();
    const hadleClickBtn = () => {
        history.push("/");
    };
    return (
        <div>
            <h4>Bạn hiện không xem được nội dung này</h4>
            <h5>
                Lỗi này thường do chủ sở hữu chỉ chia sẻ nội dung với một nhóm
                nhỏ, thay đổi người được xem hoặc đã xóa nội dung.
            </h5>
            <button class="btn btn-primary" onClick={hadleClickBtn}>
                Go to Home Page
            </button>
        </div>
    );
};

export default NotFound;
