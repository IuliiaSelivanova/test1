import errorIcon from "../../assets/icon-error.png";
import "../../styles/error.css";

const ErrorCard = () => {
  return (
    <div className="error d-flex align-items-center">
      <img src={errorIcon} alt="error icon" />
      <p>Ошибка: не удалось загрузить информацию</p>
    </div>
  );
};

export default ErrorCard;
