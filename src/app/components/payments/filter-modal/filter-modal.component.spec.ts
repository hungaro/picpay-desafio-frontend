import { FilterModalComponent } from "./filter-modal.component"

describe('FilterModalComponent' , () => {
    let component: FilterModalComponent;
    let bottomSheet;
    beforeEach(() => {
        bottomSheet = jasmine.createSpyObj('MatBottomSheet', ['dismiss']);

        component = new FilterModalComponent(bottomSheet);
    });

    it('should create the component', () => expect(component).toBeTruthy());

    it('should call the filter method', () => {
        expect(() => {
            component.filter(2)
        }).not.toThrow();
    })
})