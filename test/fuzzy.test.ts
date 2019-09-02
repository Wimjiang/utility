import fuzzy from '../src/fuzzy';
import Users from '../assets/user.list';

test('val', () => {
    const val = fuzzy('Thompson;台湾', Users, { key: 'userID' });
    expect(val.length).toBe(6);
});

// 测试splitType 是否生效
test('splitType', () => {
    const val = fuzzy('Thompson|台湾', Users, { key: 'userID',splitType: '|' });
    expect(val.length).toBe(6);
});
