import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            id: 'l2kj5',
            label: 'Can I Use React On A Project?',
            content: 'You Can Use React On Any Project You Want. You Can Use React On Any Project You Want.You Can Use React On Any Project You Want. You Can Use React On Any Project You Want.You Can Use React On Any Project You Want. You Can Use React On Any Project You Want.'
        },
        {
            id: 'l2ka[][]dj5',
            label: 'Can I Use JavaScript On A Project?',
            content: 'You Can Use React On Any Project You Want. You Can Use React On Any Project You Want.You Can Use React On Any Project You Want. You Can Use React On Any Project You Want.You Can Use React On Any Project You Want. You Can Use React On Any Project You Want.'
        },
        {
            id: 'l2k4333j5',
            label: 'Can I Use CSS On A Project?',
            content: 'You Can Use React On Any Project You Want. You Can Use React On Any Project You Want.You Can Use React On Any Project You Want. You Can Use React On Any Project You Want.You Can Use React On Any Project You Want. You Can Use React On Any Project You Want.'
        },
    ];

    return <Accordion items={items} />
}

export default AccordionPage;
