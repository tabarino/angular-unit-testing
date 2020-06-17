import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
    let component: VoteComponent;

    beforeEach(() => {
        // Set up
        component = new VoteComponent();
    });

    afterEach(() => {
        // Tear down
    });

    it('should increment totalVotes when up voted', () => {
        // Arrange
        // In this case we moved the Arrange to the Set up

        // Act
        component.upVote();

        // Assert
        expect(component.totalVotes).toBe(1);
    });

    it('should decrement totalVotes when down voted', () => {
        // Always add a new line between the Arrange, Act and Assert
        component.downVote();

        expect(component.totalVotes).toBe(-1);
    });
});
