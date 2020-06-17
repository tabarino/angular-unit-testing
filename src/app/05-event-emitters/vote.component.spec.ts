import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
    let component = new VoteComponent();

    beforeEach(() => {
        component = new VoteComponent();
    });

    it('should raise voteChanged event when up voted', () => {
        let totalVotes = null;
        component.voteChanged.subscribe(tv => totalVotes = tv);

        component.upVote();

        expect(totalVotes).toBe(1);
    });
});
