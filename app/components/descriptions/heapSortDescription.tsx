export const heapSortDescription: JSX.Element = (
  <div>
    <p>
      {`Heap sort is a comparison-based sorting algorithm that uses a data structure called a heap to sort elements. Here's a simple explanation of how it works:`}
    </p>
    <ol className={`list-decimal pl-6 space-y-2 mt-4 text-left`}>
      <li>
        <strong>{`Imagine a Pile of Blocks:`}</strong>
        {` Think of your numbers as blocks stacked in a pile. The goal is to arrange these blocks from the smallest to the largest.`}
      </li>
      <li>
        <strong>{`Take the Biggest Block:`}</strong>
        {` Once you have the biggest block on top, you take it off the pile and set it aside. Now, the biggest block is sorted and in its place.`}
      </li>
      <li>
        <strong>{`Rearrange the Remaining Blocks:`}</strong>
        {` After taking the biggest block, you need to rearrange the remaining blocks so that the next biggest block is now on top.`}
      </li>
      <li>
        <strong>{`Repeat the Process:`}</strong>
        {` Keep repeating this process: take the biggest block, set it aside, and rearrange the rest until all the blocks are sorted.`}
      </li>
      <li>
        <strong>{`Result:`}</strong>
        {` When you've taken all the blocks off the pile, you’ll have them sorted from smallest to largest!`}
      </li>
    </ol>
  </div>
);
