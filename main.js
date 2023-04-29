// Import components
function cardBox({}) {
  return <></>;
}

function App() {
  return (
    <>
      <div className="container">
        <div className="hiBox">
          <div className="hiDiv">
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
          <h1>lobox</h1>
        </div>
      </div>
    </>
  );
}

// Render
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
