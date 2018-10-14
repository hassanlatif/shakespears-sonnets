import { Component, OnInit, Input } from '@angular/core';
import { Sonnet } from '../../models/sonnet';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../store';
import { SonnetSaved } from '../../store/sonnets/sonnets.actions';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'sonnet',
  templateUrl: './sonnet.component.html',
  styleUrls: ['./sonnet.component.scss']
})
export class SonnetComponent implements OnInit {

  @Input() sonnet: Sonnet;
  editMode: boolean;
  sonnetForm: FormGroup;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit() {
    this.sonnetForm = new FormGroup({
      'number' : new FormControl(this.sonnet.number),
      'lines': new FormArray([])
    }) 
    this.sonnet.lines.forEach(line=> (<FormArray>this.sonnetForm.get('lines')).push(new FormControl(line)));
  }

  get sonnetLinesArray() : FormArray {
    return <FormArray>this.sonnetForm.get('lines');
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  saveSonnet(id: string) {
    console.log(id);
    const sonnet: Update<Sonnet> = {
      id: id,
      changes: {
        lines: this.sonnetForm.value.lines
      }
    }
    this.store.dispatch(new SonnetSaved({sonnet}))
    
  }
}
