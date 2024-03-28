import { Component } from '@angular/core';
import { IgxTimePickerComponent } from 'igniteui-angular';

@Component({
  selector: 'app-time-wheel',
  templateUrl: './time-wheel.component.html',
  styleUrls: ['./time-wheel.component.scss']
})
export class TimeWheelComponent {

  public today: Date = new Date();

    public selectNow(timePicker: IgxTimePickerComponent) {
        timePicker.value = new Date();
        timePicker.close();
    }
  // hours: number[] = Array.from({ length: 24 }, (_, index) => index);
  // selectedHour: number = new Date().getHours();

  // selectHour(hour: number) {
  //   this.selectedHour = hour;
  //   // You can emit this selected hour value using an Output event or handle it as needed
  // }

  // onScroll(event: any) {
  //   const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
  //   this.selectedHour
  // }
}
