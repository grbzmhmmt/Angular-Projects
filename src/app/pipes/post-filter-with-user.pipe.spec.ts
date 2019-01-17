import { PostFilterWithUserPipe } from './post-filter-with-user.pipe';

describe('PostFilterWithUserPipe', () => {
  it('create an instance', () => {
    const pipe = new PostFilterWithUserPipe();
    expect(pipe).toBeTruthy();
  });
});
