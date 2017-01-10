var modal = new Modal('.modal-overlay');
modal.onShow('click', '.btn');

modal.eventShow(() => {
    console.log('Modal Opening');
});

modal.eventHide(() => {
    console.log('Modal Hiding');
});