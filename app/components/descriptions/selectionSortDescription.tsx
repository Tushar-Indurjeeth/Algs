export const selectionSortDescription = (
  <div>
    <p>
      {`Selection Sort is a straight forward sorting algorithm that works by repeatedly selecting the smallest (or largest, depending on the order) element from an unsorted portion of the list and moving it to the beginning (or end) of the sorted portion. Here's how it works step-by-step:`}
    </p>
    <ol className={`list-decimal pl-6 space-y-2 mt-4 text-left`}>
      <li>
        <strong>{`Start with the first element:`}</strong>
        {` Assume the first element is the smallest in the list.`}
      </li>
      <li>
        <strong>{`Find the smallest element:`}</strong>
        {` Look through the rest of the list to find the smallest element.`}
      </li>
      <li>
        <strong>{`Swap:`}</strong>
        {` If you find a smaller element, swap it with the first element.`}
      </li>
      <li>
        <strong>{`Move to the next position:`}</strong>
        {` Now consider the first element as sorted and move to the next element in the list.`}
      </li>
      <li>
        <strong>{`Repeat the process:`}</strong>{" "}
        {` Repeat the process for the rest of the list until the entire list is sorted.`}
      </li>
      <li>
        <strong>{`Repeat:`}</strong>
        {` Keep repeating until you make a
        pass without any swaps, which means the list is sorted.`}
      </li>
    </ol>
  </div>
);
