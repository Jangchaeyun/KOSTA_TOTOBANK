import { Button, Badge } from "reactstrap";

const Section3 = () => {
  return (
    <div className="seccion_main">
      <div className="section_left">
        <div className="imgBox" style={{ float: "right" }}>
          <img src="/img/main-moim.png" width="500px" height="700px" alt="" />
        </div>
      </div>
      <div className="section_right">
        <div className="textBox" style={{ float: "left", paddingTop: "12%" }}>
          <span className="L-text">
            함께 쓰고 같이 보는 <br />
            <Badge color="warning">B</Badge>
            모임통장
          </span>
          <span className="S-text">
            토토톡 친구들 바로 모임통장으로 초대하고
            <br /> 친구들과 함께 잔액과 입출금 현황을 확인할 수 있습니다. <br />
            <br />
            <Button color="light">모임통장&nbsp;&gt;</Button>
          </span>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Section3;
