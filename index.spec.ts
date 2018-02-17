import { Test } from 'alsatian';

import { Something } from './index';

export class SomethingTest {
    @Test()
    public method_test(): void {
        var s = new Something();
        s.method();
    }
}