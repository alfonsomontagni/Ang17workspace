import { Component, OnInit } from '@angular/core';
import { CSVString } from '../utility/util';

@Component({
  selector: 'app-calcolo',
  standalone: true,
  imports: [],
  template: `
    <p>
      calcolo works!
    </p>
  `,
  styles: ``
})
export default class CalcoloComponent implements OnInit {
  matrix: any[]=[]
  
  
    ngOnInit(): void {
      CSVString.forEach((row) => {
      const csvParts = row.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);
      if (!csvParts) {
        console.error('Errore nell\'elaborazione del CSV');
        return;
      }
      type ObjType = {
        id: number;
        name: string;
        [key: number]: number[] | null | undefined;
      };

      const obj: ObjType = {
        id: parseInt(csvParts[0]),
        name: csvParts[1].replace(/"/g, ''),
      };

      for (let i = 2; i < csvParts.length; i++) {
        const part = csvParts[i].trim();
        if (part === "+") {
          obj[i - 1] = null;
        } else if (part === "") {
          obj[i - 1] = [];
        } else {
          const numbers = part.replace(/"/g, '').split(',').map(n => parseInt(n.trim()));
          obj[i - 1] = numbers.some(isNaN) ? [] : numbers;
        }
      }
        this.matrix.push(obj)
      
    })
    console.log(this.matrix);
    if(this.matrix.length>0){
      this.matrix.forEach(r=>console.log(r.name))
    }
  }

}
