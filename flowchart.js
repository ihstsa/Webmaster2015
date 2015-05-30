var setup_fc;

setup_fc = function(fc, data) {
  var trigger;
  trigger = function(question) {
    var a, aks, answers, d, div, dtr, fn, htr, key, keys, len, name, next, table, td, th;
    if (typeof question === 'string') {
      d = document.createElement('div');
      d.className = 'final';
      d.textContent = question;
      fc.appendChild(d);
      return;
    }
    name = Object.keys(question)[0];
    answers = question[name];
    aks = Object.keys(answers);
    div = document.createElement('div');
    table = document.createElement('table');
    htr = document.createElement('tr');
    th = document.createElement('th');
    th.colSpan = aks.length;
    th.textContent = name;
    htr.appendChild(th);
    table.appendChild(htr);
    dtr = document.createElement('tr');
    keys = Object.keys(answers);
    fn = function(next, table, len, td, div) {
      a.addEventListener('click', function(event) {
        var d2, em, s, span, tx, w;
        while (div.nextSibling) {
          fc.removeChild(div.nextSibling);
        }
        while (table.nextSibling) {
          div.removeChild(table.nextSibling);
        }
        tx = td.offsetLeft + td.offsetWidth / 2;
        w = Math.abs(tx - (table.offsetWidth / 2)) - 1;
        s = Math.min(tx, table.offsetWidth / 2) - 2;
        console.log(w, s);
        d = document.createElement('div');
        em = Number(getComputedStyle(div, "").fontSize.match(/(\d*(\.\d*)?)px/)[1]);
        d.style.position = 'relative';
        d.style.left = String(s / em) + 'em';
        d.style.width = String(w / em) + 'em';
        d.className = 'arrow ' + (tx * 2 < table.offsetWidth ? 'left' : 'right');
        div.appendChild(d);
        d2 = document.createElement('div');
        span = document.createElement('span');
        span.textContent = String.fromCharCode(0x2b07);
        d2.className = 'achar';
        d2.appendChild(span);
        div.appendChild(d2);
        trigger(next);
        console.log(next);
        event.preventDefault();
        return false;
      });
    };
    for (key in answers) {
      td = document.createElement('td');
      next = answers[key];
      a = document.createElement('a');
      a.textContent = key;
      a.href = '#' + Math.random();
      len = keys.length;
      fn(next, table, len, td, div);
      td.style.width = (100 / keys.length).toFixed(2) + '%';
      td.appendChild(a);
      dtr.appendChild(td);
    }
    table.appendChild(dtr);
    div.appendChild(table);
    fc.appendChild(div);
  };
  trigger(data);
};

