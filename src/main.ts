import * as ko from 'knockout';
import { discover } from './components/discover/discover';
import { ring } from './components/ring/ring';
import { selected } from './components/selected/selected';
import { original } from './components/original/original';
import { jewelry } from './components/jewelry/jewelry';
import { bridal } from './components/bridal/bridal';
import { events } from './components/events/events';
import { instagram } from './components/instagram/instagram';
import { stores } from './components/stores/stores';
import { tradition } from './components/tradition/tradition';
import { collection } from './components/collection/collection';

import { header } from './components/header/header';
import { footer } from './components/footer/footer';

export default class ViewModel {
  private discover: void;
  private ring: void;
  private selected: void;
  private collection: void;
  private header: void;
  private original: void;
  private jewelry: void;
  private bridal: void;
  private events: void;
  private instagram: void;
  private tradition: void;
  private stores: void;
  private footer: void;
  private selectedOptionValue = ko.observable("");
  private apiData = ko.observableArray([]);
  private readyToShow = ko.observable(false);
  private valueOfState = ko.observable("");

  constructor() {
    this.instagram = instagram();
    this.selected = selected();
    this.collection = collection();
    this.discover = discover();
    this.ring = ring();
    this.header = header();
    this.original = original();
    this.jewelry = jewelry();
    this.bridal = bridal();
    this.events = events();
    this.tradition = tradition();
    this.stores = stores();
    this.footer = footer();
    this.fetchData();
    this.selectedOptionValue();

  }

  fillState(data, event) {
    this.valueOfState(event.target.value);
    this.fetchData();
  }
  fetchData() {
    var that = this;
    var url = "http://localhost:3000/data";
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        that.apiData(JSON.parse(xhttp.responseText));
        console.log(that.apiData())
        that.readyToShow(true);
      }
    };
    xhttp.open("GET", url, true);
    xhttp.withCredentials = false;
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send();
  }
}

ko.applyBindings(new ViewModel());
