import { Button } from "reactstrap";
const Section1 = () => {
  return (
    <div className="seccion_main">
      <div className="section_left">
        <div className="imgBox" style={{ float: "right" }}>
          <img
            src="/img/main-withdrawal.png"
            height="680px"
            width="480px"
            alt="toto1"
          />
        </div>
      </div>
      <div className="section_right">
        <div className="textBox" style={{ float: "left", paddingTop: "25%" }}>
          <span className="L-text">
            모바일로 더 손쉬운 <br />
            계좌개설, 간편한 이체
          </span>
          <span className="S-text">
            인증서, OTP 없이 계좌 개설이 간편합니다. 여러 건의 이체도 몇 번의
            터치로 쉽게 보낼 수 있습니다.
          </span>
          <br />
          <Button color="light">TOTO뱅크&nbsp;&gt;</Button>
        </div>
      </div>
    </div>
  );
};

export default Section1;
