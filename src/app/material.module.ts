import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  exports: [ MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule, MatBadgeModule ]
})

export class MaterialModule {}