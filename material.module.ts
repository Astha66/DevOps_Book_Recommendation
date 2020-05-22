import { NgModule } from '@angular/core';
import { MatTooltipModule } from '/home/flavone01/Desktop/sem2/mosip/angular/angular projects/BookRecommend/node_modules/material/tooltip';
import { MatExpansionModule } from '/home/flavone01/Desktop/sem2/mosip/angular/angular projects/BookRecommend/node_modules/material/expansion';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatToolbarModule
} from '/home/flavone01/Desktop/sem2/mosip/angular/angular projects/BookRecommend/node_modules/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatExpansionModule,
    MatTooltipModule
  ]
})
export class MaterialModule {}
