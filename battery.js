trigger = (question) ->
  if typeof question == 'string'
    d = document.createElement('div')
    d.className = 'final'
    d.textContent = question
    fc.appendChild(d)
    return
  name = Object.keys(question)[0]
  answers = question[name]
  aks = Object.keys(answers)
  div = document.createElement('div')
  table = document.createElement('table')
  htr = document.createElement('tr')
  th = document.createElement('th')
  th.colSpan = aks.length
  th.textContent = name
  htr.appendChild(th)
  table.appendChild(htr)
  dtr = document.createElement('tr')
  keys = Object.keys(answers)
  for key of answers
    td = document.createElement('td')
    next = answers[key]
    a = document.createElement('a')
    a.textContent = key
    a.href = '#' + Math.random()
    
    len = keys.length
    do (next, table, len, td, div) ->
      a.addEventListener 'click', (event) ->
        while div.nextSibling
          fc.removeChild(div.nextSibling)
        while table.nextSibling
          div.removeChild(table.nextSibling)
        tx = td.offsetLeft + td.offsetWidth / 2
        w = Math.abs(tx - (table.offsetWidth / 2)) - 1
        s = Math.min(tx, table.offsetWidth / 2) - 2
        console.log(w, s)
        d = document.createElement('div');
        em = Number(getComputedStyle(div, "").fontSize.match(/(\d*(\.\d*)?)px/)[1])
        d.style.position = 'relative'
        d.style.left = String(s / em) + 'em'
        d.style.width = String(w / em) + 'em'
        d.className = 'arrow ' + (if tx * 2 < table.offsetWidth then 'left' else 'right')
        div.appendChild(d)
        d2 = document.createElement('div')
        span = document.createElement('span')
        span.textContent = String.fromCharCode(0x2b07);
        d2.className = 'achar'
        d2.appendChild(span)
        div.appendChild(d2)
        trigger(next)
        console.log(next)
        event.preventDefault()
        false
      return
    td.style.width = (100 / keys.length).toFixed(2) + '%'
    td.appendChild(a)
    dtr.appendChild(td)
  table.appendChild(dtr)
  div.appendChild(table)
  fc.appendChild(div)
  return

$ = document.getElementById.bind(document)

###var questions = {'Question 1' : {
    'A': {'Question 2': 
          {'A': 'Test', 'B': 'Test2'}
         },
    'B': 'TestB',
    'C': {'Question 3':
          {'Bang': 'A', 'Whimper': 'B', 'Fff': 'C'}
         }
}
}
###

questions = 
'What kind of battery do you have?':
  'Car Battery': 'Is it corroded?':
    'Yes': 'Tessdsd'
    'No': 'asdasd'
  'Power Tool Battery': 'Test'
  'Button Battery': 'Test'
  'Rechargeable Battery': 'Test'
  'AAA or AA Battery': 'Is it leaking?':
    'Yes': 'Wrap it in a plastic bag'
    'No': 'Bring it to your local hazardous waste disposal'
fc = $('flowchart')
trigger questions
