import { RemoveModalComponent } from "./remove-modal.component";


describe('RemoveModalComponent', () => {
    let component: RemoveModalComponent;
    let dialogRef;
  
    beforeEach(() => {
        dialogRef = jasmine.createSpyObj('MatDialogRef', ['close'])

        component = new RemoveModalComponent(dialogRef, { payment: { title: 'Front-End Developer', value: 177, name: 'Bruno Lins' }});
    });

    it('should create the remove-modal component', () => expect(component).toBeTruthy());

    it('should call the close method', () => {
        expect(() => {
            component.close()
        }).not.toThrow();
    });

    it('should call the save method', () => {
        expect(() => {
            component.save()
        }).not.toThrow();
    });
})
