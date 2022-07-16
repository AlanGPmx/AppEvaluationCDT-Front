import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  exports: [ MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule, MatBadgeModule, MatSelectModule ]
})

export class MaterialModule {}