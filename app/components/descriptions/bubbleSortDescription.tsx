export const name = "Bubble Sort";

export const bubbleSortDescription: JSX.Element = (
  <div>
    <p>
      {`Bubble Sort is a simple sorting algorithm that works by repeatedly
        stepping through a list of items, comparing adjacent pairs, and swapping
        them if they are in the wrong order. Here's how it works in simple terms:`}
    </p>
    <ol className={`list-decimal pl-6 space-y-2 mt-4 text-left`}>
      <li>
        <strong>{`Start at the beginning:`}</strong>
        {` Look at the first two items
        in the list.`}
      </li>
      <li>
        <strong>{`Compare:`}</strong>
        {` If the first item is greater than the
        second item, swap them.`}
      </li>
      <li>
        <strong>{`Move to the next pair:`}</strong>
        {` Move one position to the
        right and compare the next two items.`}
      </li>
      <li>
        <strong>{`Repeat:`}</strong>
        {` Continue this process for the entire list.
          After one complete pass, the largest item will "bubble up" to the end of
          the list.`}
      </li>
      <li>
        <strong>{`Repeat the process:`}</strong>
        {` Go back to the start of the list
        and repeat the steps, ignoring the last sorted items (since they are
        already in place).`}
      </li>
      <li>
        <strong>{`Finish when sorted:`}</strong>
        {` Keep repeating until you make a
        pass without any swaps, which means the list is sorted.`}
      </li>
    </ol>
  </div>
);
