export default function PageScore() {
  return (
    <>
      <h1>Score</h1>
      <button className="btn_score-add" type="submit" value="addScore">
        Add score
      </button>
      <div className="container_score">
        <div className="score-field sfield-red">
          <div className="score_result">100</div>
        </div>
        <div className="score-field sfield-green">
          <div className="score_result">100</div>
        </div>
        <div className="score-field sfield-blue">
          <div className="score_result">100</div>
        </div>
        <div className="score-field sfield-purple">
          <div className="score_result">100</div>
        </div>
      </div>
    </>
  );
}
