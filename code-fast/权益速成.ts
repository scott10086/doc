
                <div class="ui-message ui-messages-error"
                  *ngIf="!filterForm.controls.childBudgetId.valid&&filterForm.controls.childBudgetId.dirty">
                  <span class="fa ui-icon-error"></span>&nbsp;
                  <span *ngIf="filterForm.controls.childBudgetId.errors?.required">子预算标识不能为空</span>
                  <span *ngIf="!filterForm.controls.childBudgetId.errors?.required">
                    <span
                      *ngIf="filterForm.controls.childBudgetId.errors?.scError">{{filterForm.controls.childBudgetId.errors?.scError.errorMsg}}</span>
                    <span *ngIf="!filterForm.controls.childBudgetId.errors?.scError">
                      <span
                        *ngIf="filterForm.controls.childBudgetId.errors?.spaceError">{{filterForm.controls.childBudgetId.errors?.spaceError.errorMsg}}</span>
                      <span *ngIf="!filterForm.controls.childBudgetId.errors?.spaceError">
                        <span
                          *ngIf="filterForm.controls.childBudgetId.errors?.maxlength">子预算标识最大长度为{{filterForm.controls.childBudgetId.errors?.maxlength.requiredLength}}位</span>
                      </span>
                    </span>
                  </span>
                </div>



'88888888': ['', [checkSpecialCharacter, Validators.maxLength(255), checkSpace]],


