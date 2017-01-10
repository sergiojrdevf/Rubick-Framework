var modal = new Modal('.modal-overlay');
modal.onShow('click', '.open-modal');

modal.eventShow(() => {
    console.log('Modal Opening');
});

modal.eventHide(() => {
    console.log('Modal Hiding');
});