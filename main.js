_$ = (n) => {
	return document.getElementById(n);
}

calc = (pot, round, winners) => {
  round = 2;
  return ((((pot - (pot % 6)) / 6) * round) - ((((pot - (pot % 6)) / 6) * round) % winners)) / winners;
}

submit = () => {
	let pot = parseInt(_$("total-pot").value);
  let r1 = parseInt(_$("r1").value);
  let r2 = parseInt(_$("r2").value);
  let r3 = parseInt(_$("r3").value);
  
  let c1 = calc(pot, 1, r1);
  let c2 = calc(pot, 2, r2);
  let c3 = calc(pot, 3, r3);
  
  _$("res1").innerHTML = c1;
  _$("res2").innerHTML = c2;
  _$("res3").innerHTML = c3;
}
