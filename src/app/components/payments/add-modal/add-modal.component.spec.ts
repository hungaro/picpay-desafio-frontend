import { AddModalComponent } from "./add-modal.component";

describe('AddModalComponent', () => {
    let component: AddModalComponent;
    let dialogRef;
  
    beforeEach(() => {
        dialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);
        component = new AddModalComponent(dialogRef, { payment: { title: 'Front-End Developer', value: 177, name: 'Bruno Lins' } });
    });

    it('should create the add-modal component', () => expect(component).toBeTruthy());

    it('should call the close method', () => {
        component.close();

        expect(dialogRef.close).toHaveBeenCalled();
    });

    it('should call the save method', () => {
        component.title = 'New Title';
        component.value = 771;
        component.user = '@idevnotes';
        
        component.save();

        expect(component.data.payment.title).toEqual('New Title');
        expect(component.data.payment.value).toEqual(771);
        
    });
})
