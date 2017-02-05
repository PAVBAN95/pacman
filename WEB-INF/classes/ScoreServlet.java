import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.io.PrintWriter;
import java.sql.*;




public class ScoreServlet extends HttpServlet {
	
	public void doPost(HttpServletRequest req,HttpServletResponse res) throws IOException,ServletException {
		doGet(req,res);
	}

	public void doGet(HttpServletRequest req,HttpServletResponse res) throws IOException,ServletException {

		PrintWriter out=res.getWriter();
		
		res.setContentType("text/html");
		// out.println("In servlet");
		//HttpSession session=req.getSession();
		ResultSet rs=null;
	
		try{

			Class.forName("com.mysql.jdbc.Driver");
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/score","root","qwerty95#");
			PreparedStatement pst=con.prepareStatement("Select * from data ORDER BY score DESC");
			rs=pst.executeQuery();

		}
		catch(Exception e){

			out.println("fail to fetch:"+e.getMessage());
		}
		finally{
			      try 
				{
				    req.setAttribute("resultset", rs);
				    RequestDispatcher rd= req.getRequestDispatcher("/data.jsp");
				    rd.forward(req, res);
				    //response.sendRedirect("editrecord.jsp");
				} 
				catch (Exception e) 
				{
				    System.out.println("This is finally block data.jsp");
				    e.printStackTrace();
				}
			}

		}
}
