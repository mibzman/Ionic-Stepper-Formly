import { Component, ViewChild, ViewChildren, QueryList } from "@angular/core";
import { FormArray, FormGroup } from "@angular/forms";
import { FormlyFormOptions, FormlyFieldConfig } from "@ngx-formly/core";
import { IonicStepperComponent } from "ionic-stepper";
import { Content } from "ionic-angular";

export interface StepType {
  label: string;
  fields: FormlyFieldConfig[];
}

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  mode: string = "vertical";
  selectedIndex: number = 0;
  stepperForm: FormGroup;
  _JSONString: string = "";

  activedStep = 0;

  model = {};
  steps: StepType[] = [
    {
      label: "Personal data",
      fields: [
        {
          key: "firstname",
          type: "input",
          templateOptions: {
            label: "First name",
            required: true
          }
        },
        {
          key: "age",
          type: "input",
          templateOptions: {
            type: "number",
            label: "Age",
            required: true
          }
        }
      ]
    },
    {
      label: "Destination",
      fields: [
        {
          key: "country",
          type: "input",
          templateOptions: {
            label: "Country",
            required: true
          }
        }
      ]
    },
    {
      label: "Day of the trip",
      fields: [
        {
          key: "day",
          type: "input",
          templateOptions: {
            type: "date",
            label: "Day of the trip",
            required: true
          }
        }
      ]
    }
  ];

  form = new FormArray(this.steps.map(() => new FormGroup({})));
  options = this.steps.map(() => <FormlyFormOptions>{});

  result: string;

  selectChange(e: number) {
    this.selectedIndex = e;
  }

  prevStep(step) {
    this.activedStep = step - 1;
  }

  nextStep(step) {
    this.activedStep = step + 1;
  }

  submit() {
    this.result = JSON.stringify(this.model);
  }
}
