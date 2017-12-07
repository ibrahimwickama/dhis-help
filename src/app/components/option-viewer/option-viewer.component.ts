import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-option-viewer',
  templateUrl: './option-viewer.component.html',
  styleUrls: ['./option-viewer.component.css']
})
export class OptionViewerComponent implements OnInit {

  @Input() selected;

  selectedOption:any;

  constructor() { }

  ngOnInit() {
  }

  settingOption(option){
    this.selectedOption = option;
  }


  selectedSettings(){


    if(this.selected.key === 'setting-dhis'){

    }else if(this.selected.key === 'data-quality-functionality'){

    }else if(this.selected.key === 'import-export'){

    }else if(this.selected.key === 'datasets-forms'){

    }else if(this.selected.key === 'organisation-unit'){

    }else if(this.selected.key === 'about-dhis'){

    }else if(this.selected.key === 'starting-dhis'){

    }else if(this.selected.key === 'indicators'){

    }else if(this.selected.key === 'user-management'){

    }else if(this.selected.key === 'data-visualizer'){

    }else if(this.selected.key === 'using-gis'){

    }else if(this.selected.key === 'reports-module'){

    }else if(this.selected.key === 'data-entry'){

    }else if(this.selected.key === 'data-administration'){

    }else if(this.selected.key === 'data-elements'){

    }

    // else if(this.selected.key === ''){
    //
    // }else if(this.selected.key === ''){
    //
    // }else if(this.selected.key === ''){
    //
    // }

  }

}
