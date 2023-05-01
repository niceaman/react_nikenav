// Import components
function cardBox({}) {
  return <></>;
}

function App() {
  return (
    <>
      <div className="container">
        <div className="hiBox">
          <div className="hiDiv underline">
            <p>ใหม่และโดดเด่น</p>
          </div>
          <div className="hiDiv">
            <p>ผู้ชาย</p>
          </div>
          <div className="hiDiv">
            <p>ผู้หญิง</p>
          </div>
          <div className="hiDiv">
            <p>เด็ก</p>
          </div>
          <div className="hiDiv">
            <p>ลดราคา</p>
          </div>
          <div className="hiDiv">
            <p>SNKRS</p>
          </div>
          <div className="magnifyingDiv">
            <i class="fa-solid fa-magnifying-glass fa-lg"></i>
          </div>
        </div>
        <div className="loBox">
          <div>loboxcl01</div>
          <div>loboxcl02</div>
          <div>loboxcl03</div>
          <div>loboxcl04</div>
          <div>loboxcl05</div>
        </div>
      </div>
    </>
  );
}

// Render
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
