import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.Stack;
import java.util.regex.Pattern;

public class WordMachine {
    private static final Map<String, Runnable> OPERATIONS = new HashMap<>();
    {
        OPERATIONS.put("+", this::add); //pops 2, adds them
        OPERATIONS.put("POP", this::pop); //removes
        OPERATIONS.put("DUP", this::dup);//pushes
        OPERATIONS.put("-", this::sub); //pops 2, subtracts them
    }
    public static final int MINIMUM = 0;
    public static final int MAXIMUM = 0xFFFFF;
    private static final Pattern NUMERIC = Pattern.compile("\\d+");
    private final Stack<Integer> stack = new Stack<>();

    public int solution(String S) {
        try {
            Arrays.stream(S.split(" ")).forEach(this::setCommand);
            return pop();
        } catch (IllegalArgumentException e) {
            return -1;
        }
    }

    private void setCommand(String s) {
        if (NUMERIC.matcher(s).matches()) {
            push(Integer.valueOf(s));
        } else {
            OPERATIONS.get(s).run();
        }
    }

    private void push(int i) {
        if(i < MINIMUM || i > MAXIMUM){
            throw new IllegalArgumentException("Input under/overflow");
        }
        stack.push(i);
    }


    private int pop() {
        return stack.pop();
    }

    private void dup() {
        hasElements(1);
        push(stack.peek());
    }

    private void add() {
        hasElements(2);
        push(stack.pop() + stack.pop());
    }

    private void sub() {
        hasElements(2);
        push(stack.pop() - stack.pop());
    }

    private int hasElements(int i) {
        if(stack.size() < i){
            throw new IllegalArgumentException("Too few elements available");
        }
        return i;
    }
}