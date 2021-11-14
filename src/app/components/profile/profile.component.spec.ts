import { ProfileComponent } from './profile.component';


describe('ProfileComponent' , () => {
    let component: ProfileComponent;
    let bottomSheet;
    beforeEach(() => {
        bottomSheet = jasmine.createSpyObj('MatBottomSheet', ['open']);

        component = new ProfileComponent(bottomSheet);
    });

    it('should create the component', () => expect(component).toBeTruthy());
})