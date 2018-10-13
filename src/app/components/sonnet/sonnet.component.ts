import { Component, OnInit, Input } from '@angular/core';
import { Sonnet } from '../../models/sonnet';

@Component({
  selector: 'sonnet',
  templateUrl: './sonnet.component.html',
  styleUrls: ['./sonnet.component.scss']
})
export class SonnetComponent implements OnInit {

  @Input() sonnet : Sonnet;

  constructor() { }

  ngOnInit() {
  }

}
