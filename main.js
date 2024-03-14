//イベントリスナーを"convertBtn"ボタンに追加
document.getElementById("convertBtn").addEventListener("click", function () {
  //入力値(value)と単位(unit)の取得
  //.valueプロパティを使えば、プログラムがユーザーの入力を’読み取る’事が可能なる
  const value = document.getElementById("inputValue").value;
  const unit = document.getElementById("unitSelect").value;

  //変換結果(result)の計算
  //スコープの関係上letが適切
  //1Inch=2.54cm
  //toFixed()で数値を指定された小数点以下の桁数に丸めることができる
  let result;
  if (unit === "cmToInch") {
    result = (value / 2.54).toFixed(2) + " inches";
  } else {
    result = (value * 2.54).toFixed(2) + " cm";
  }

  //変換結果の表示
  //resultは上記のletで宣言された変数
  document.getElementById("resultText").innerText = result;

  //clearボタンの処理(イベントリスナーの登録)
  document.getElementById("clearBtn").addEventListener("click", () => {
    document.getElementById("inputValue").value = "";
    document.getElementById("resultText").innerText = "";
  });
});
