import { DateRangeComponent } from './date-range.component'

describe('DateRangeComponent', () => {
    let component: DateRangeComponent

    beforeEach(() => {
        component = new DateRangeComponent();
    });

    it('should create the component', () => expect(component).toBeTruthy());

    it('should call the startDate method', () => {
        expect(() => {
            component.startDate({ value: new Date() });
        }).not.toThrow();
    })

    it('should call the endDate method', () => {
        expect(() => {
            component.endDate({ value: new Date() });
        }).not.toThrow();
    })
});