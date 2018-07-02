function handleLogin(req, res) {
  const id = req.body.id;
  var pw = req.body.pw;

  if (id === 'user' && pw === '1234') {
    req.session.userid = id;
    res.send('Login Sucess');
  } else {
    res.send('Login Fail');
  }
}


function showPersonalpage(req, res) {
  var id = req.session.userid;
  if (id) {
    res.send('private page for ' + id);
  } else {
    res.sendStatus(401);
  }
}
