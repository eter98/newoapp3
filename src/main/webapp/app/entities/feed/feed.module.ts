import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { NewoApp3SharedModule } from 'app/shared';
import {
  FeedComponent,
  FeedDetailComponent,
  FeedUpdateComponent,
  FeedDeletePopupComponent,
  FeedDeleteDialogComponent,
  feedRoute,
  feedPopupRoute
} from './';

const ENTITY_STATES = [...feedRoute, ...feedPopupRoute];

@NgModule({
  imports: [NewoApp3SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [FeedComponent, FeedDetailComponent, FeedUpdateComponent, FeedDeleteDialogComponent, FeedDeletePopupComponent],
  entryComponents: [FeedComponent, FeedUpdateComponent, FeedDeleteDialogComponent, FeedDeletePopupComponent],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewoApp3FeedModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey !== undefined) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
