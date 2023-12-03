'use strict'

let targets = document.querySelectorAll(".marker")
let filter = document.querySelectorAll(".org input")

if (filter) {
  //****** for all select ******
  for (let i of filter) {
    i.addEventListener('change', () => {
      //*** for each target ***
      for (let ii of targets) {
        //*** delete hidden class ***
        ii.classList.remove('hidden')
        let value = i.value
        let name = i.getAttribute('name')
        let item_data = ii.getAttribute('data-' + name)
        //*** set hidden class ***
        if (value && value !== 'all' && value !== item_data && !ii.classList.contains('hidden')) {
          ii.classList.add('hidden')
        }
      }
    });
  }
}
