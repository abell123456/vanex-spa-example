import {
    Relation
} from 'vanex';

const relation = new Relation({
    filters: {
        filter1(payload) {
            return payload;
        },
        filter2(payload) {
            return payload;
        },
    },
});

relation.autorun((context) => {
    console.log('[autorun] ', context.modela.toJS());
    console.log('[autorun] ', context.modelb.toJS());

    context.modelb.pageaNum = context.modela.toJS().counts;
});

export default relation;
