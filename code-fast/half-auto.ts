HALF-AUTO 
表单新增修改
 
ts

// 必备字段
{label:'字段中文标识',key:'字段英文标识',requiredFlag:'必输标识', inputType: '输入框类型'}

// input
{inputType: 'input', validatorKey: '校验函数',}

// calendar
{inputType: 'calendar',localeCN: CALENDAR_CN}

// dropdown
{inputType: 'dropdown', options: [],placeholder:'请选择'},

// checkbox
{inputType: 'checkbox', value: '选中的值'}

// radioButton
{inputType: 'radioButton', value: '选中的值'}

// orgInput
{inputType: 'orgInput'},

  refreshFlag = true; // 重置自定义表单
  orgKey = {  // 选择机构
    selectionMode: 'single',
    selectOrgId: '',
    selectOrgName: '',
    parentOrgId: '',
    title: '选择机构',
    formKey: 'orgKey',
    nextKey: 'userKey'
  };

  formReset(clear?) {
    this.orgKey.selectOrgId = '';
    this.refreshFlag = !this.refreshFlag;

  // 自定义组件机构回调函数
  orgCallback(param, key) {
    if (param) {
      this[key].selectOrgId = param[key + 'Id'];  // 选中id回填
      this.filterForm.get(key).setValue(param[key + 'Id']);  // 选中id回填
      this.filterForm.get(key + 'Name').setValue(param[key + 'Name']);  // 选中Name回填
    }
  }

// userInput
{inputType: 'userInput'},

  refreshFlag = true; // 重置自定义表单
  userKey = {  // 选择人员
    selectionMode: 'single',
    placeholderLabel: '请先选择机构',
    orgId: '',
    selectedItem: '',
    title: '选择人员',
    formKey: 'userKey'
  };

  formReset(clear?) {
    this.userKey.selectedItem = '';
    this.refreshFlag = !this.refreshFlag;

  // 自定义组件用户回调函数
  userCallback(param, key) {
    this.filterForm.get(key).setValue(param[key + 'Id']);
    this[key].seleted = param[key + 'Id'] + '_' + param[key + 'Name'];
  }

// date2Input
{inputType: 'date2Input'},


    refreshFlag: boolean = true;  // 重置标志位
    // 时间区间有效性标识
    dateIntervalCorrect: boolean = true;
    // date校验标识
    dateInterval = {
        validateFlagKey: 'validateFlagKey',
        dateStartKey: 'fromDate',
        dateEndKey: 'toDate',
        canEqual: true,
        startDateInit: '',
        endDateInit: '',
    };

	// 重置
	formReset(clear?) {
	  this.dateCorrect = true;

    // 日期回调函数
    dateCallback(param, key) {
        this[key + 'Correct'] = param[this[key].validateFlagKey];
        this.ngForm.get(this[key].dateStartKey).setValue(param[this[key].dateStartKey]);
        this.ngForm.get(this[key].dateEndKey).setValue(param[this[key].dateEndKey]);
    }

// yearMonth2Input
{inputType: 'yearMonth2Input'}

  refreshFlag: boolean = true;   时间区间有效性标识
  yearMonthCorrect: boolean = true; // yearMonth校验标识
  yearMonth = {
    validateFlagKey: 'validateFlagKey',
    dateStartKey: 'startDt',
    dateEndKey: 'endDt',
    canEqual: true
  };

  // 重置
  formReset(clear?) {
    this.yearMonthCorrect = true;
    this.refreshFlag = !this.refreshFlag;

  // 日期回调函数
  yearMonthCallback(param, key) {
    this[key + 'Correct'] = param[this[key].validateFlagKey];
    this.filterForm.get(this[key].dateStartKey).setValue(param[this[key].dateStartKey]);
    this.filterForm.get(this[key].dateEndKey).setValue(param[this[key].dateEndKey]);
  }

// addressInput
{inputType: 'addressInput'}

// tradeInput
{inputType: 'tradeInput'}



html

<input pInputText formControlName="{{obj.key}}" *ngIf="obj.inputType==='input'">


<p-calendar [locale]="localeCN" [monthNavigator]="true" [yearNavigator]="true" dateFormat="yy-mm-dd" formControlName="{{obj.key}}" readonlyInput="true" showIcon="true" yearRange="1917:2050" *ngIf="obj.inputType==='calendar'"></p-calendar>

<p-dropdown [options]="obj.options" formControlName="{{obj.key}}" *ngIf="obj.inputType==='dropdown'"></p-dropdown>

<p-checkbox name="{{obj.key}}" formControlName="{{obj.key}}" value="{{obj.key}}" *ngIf="obj.inputType==='checkbox'"></p-checkbox>

<p-radioButton name="{{obj.key}}" value="{{obj.value}}" formControlName="{{obj.key}}" *ngIf="obj.inputType==='radioButton'"></p-radioButton>

<org-select [refreshFlag]="refreshFlag" [inValue]="this[obj.key]" (outValue)="orgCallback($event,obj.key)" *ngIf="obj.inputType==='orgInput'"></org-select>

<user-select [refreshFlag]="refreshFlag" [inValue]="this[obj.key]" (outValue)="userCallback($event,obj.key)" *ngIf="obj.inputType==='userInput'"></user-select>

<two-date-validator-input [refreshFlag]="refreshFlag" [inValue]="this[obj.key]" (outValue)="dateCallback($event,obj.key)" *ngIf="obj.inputType==='date2Input'"></two-date-validator-input>

 [disabled]="!filterForm.valid||!dateCorrect"

<two-date-month-validator-input [refreshFlag]="refreshFlag" [inValue]="this[obj.key]" (outValue)="yearMonthCallback($event,obj.key)" *ngIf="obj.inputType==='yearMonth2Input'"></two-date-month-validator-input>

 [disabled]="!filterForm.valid||!dateCorrect"

<address-select [refreshFlag]="refreshFlag" [inValue]="this[obj.key]" (outValue)="addressCallback($event,obj.key)" *ngIf="obj.inputType==='addressInput'"></address-select>


<trade-select [refreshFlag]="refreshFlag" [inValue]="this[obj.key]" (outValue)="tradeCallback($event,obj.key)" *ngIf="obj.inputType==='tradeInput'"></trade-select>

