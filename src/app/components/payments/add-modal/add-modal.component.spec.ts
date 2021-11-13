import { AddModalComponent } from "./add-modal.component";

describe('AddModalComponent', () => {
    let component: AddModalComponent;
    let dialogRef, translate;
  
    beforeEach(() => {
        dialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);
        translate = jasmine.createSpyObj('TranslateService', ['instant']);

        translate.instant.and.returnValue('the text translated');

        component = new AddModalComponent(dialogRef, { payment: { title: 'Front-End Developer', value: 177, name: 'Bruno Lins' }}, translate);
    });

    it('should create the add-modal component', () => expect(component).toBeTruthy());

    it('should call the close method', () => {
        component.close();

        expect(dialogRef.close).toHaveBeenCalled();
    });

    it('should call the save method with data', () => {
        expect(() => {
            component.save();
        }).not.toThrow();
    });

    it('should call the isValid method', () => {
        component.value = 100;
        component.user = 'Bruno Lins'
        let res = component.isValid();

        expect(res).toBe(true);
    });

    it('should call the verifyField method', () => {
        component.msg_error = 'Has error on screen'
        component.value = 100;
        component.user = 'Bruno Lins';
        component.verifyField();

        expect(component.msg_error).toBe(null);
    })
})
